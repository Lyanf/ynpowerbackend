using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Diagnostics;

namespace SetupTools
{
    public partial class Form1 : Form
    {
        public static string diskChar = "C";

        public Form1()
        {
            InitializeComponent();
        }

        string getInitDbContent(string diskChar)
        {
            return "set PGPASSWORD=admin123\ntype .\\script\\init.sql | \"" + diskChar + ":\\Program Files\\PostgreSQL\\13\\bin\\psql.exe\" -h \"localhost\" -U \"postgres\" -d \"electric\" -p 5432";
        }

        private string getRelativePath(string rel)
        {
            return Path.Combine(Environment.CurrentDirectory, rel);
        }

        private void tryInstall(string path, bool noSuccessPrompt = false)
        {
            try
            {
                Process process = new Process();
                process.StartInfo.FileName = getRelativePath(path);
                process.Start();
                process.WaitForExit();
                if (process.ExitCode == 0)
                {
                    if (noSuccessPrompt)
                    {
                        return;
                    }
                    MessageBox.Show("安装已顺利完成。", "成功", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else
                {
                    MessageBox.Show("安装发生了问题，错误代码是 " + process.ExitCode.ToString() + "。", "失败", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            catch
            {
                MessageBox.Show("找不到安装程序 " + path + "。", "错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void tryExecute(string path)
        {
            try
            {
                Process process = new Process();
                process.StartInfo.FileName = getRelativePath(path);
                process.Start();
                process.WaitForExit();
                if (process.ExitCode == 0)
                {
                    MessageBox.Show("配置已顺利完成。", "成功", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else
                {
                    MessageBox.Show("配置发生了问题，错误代码是 " + process.ExitCode.ToString() + "。", "失败", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            catch
            {
                MessageBox.Show("找不到配置脚本 " + path + "。", "错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            更改安装盘符ToolStripMenuItem.Text = "更改安装盘符（" + diskChar + ":\\）为…";
        }

        private void stepOneInstall_Click(object sender, EventArgs e)
        {
            tryInstall("./bin/setup.exe");
        }

        private void stepTwoInstall_Click(object sender, EventArgs e)
        {
            tryInstall("./bin/python-3.7.9-amd64.exe");
        }

        private void stepThreeInstall_Click(object sender, EventArgs e)
        {
            MessageBox.Show("请使用 admin123 作为默认用户 postgres 的密码，并保持默认 5432 端口设定不变。", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information);
            tryInstall("./bin/postgresql-13.2-2-windows-x64.exe");
        }

        private void stepFourInstall_Click(object sender, EventArgs e)
        {
            tryInstall("./bin/MATLAB_Runtime_R2019a_Update_9_win64/setup.exe", true);
        }

        private void stepFiveConfigure_Click(object sender, EventArgs e)
        {
           try
            {
                var name = "PATH";
                var scope = EnvironmentVariableTarget.Machine;
                var oldValue = Environment.GetEnvironmentVariable(name, scope);
                var newValue = oldValue + @";" + diskChar + @":\Program Files\MATLAB\MATLAB Runtime\v96\runtime\win64";
                Environment.SetEnvironmentVariable(name, newValue, scope);
                MessageBox.Show("配置环境变量成功。", "成功", MessageBoxButtons.OK, MessageBoxIcon.Information);
            } catch
            {
                MessageBox.Show("权限不足。请以管理员身份启动配置程序。", "错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void stepSixInit_Click(object sender, EventArgs e)
        {
            string content = getInitDbContent(diskChar);
            try
            {
                System.IO.StreamWriter writer = new System.IO.StreamWriter("./script/initdb.bat", false, System.Text.Encoding.ASCII);
                writer.WriteLine(content);
                writer.Close();
                writer.Dispose();
                tryExecute("./script/initdb.bat");
            }
            catch
            {
                MessageBox.Show("无法生成数据库脚本 ./script/initdb.bat。", "错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void step2Detect_Click(object sender, EventArgs e)
        {
            try
            {
                Process process = new Process();
                process.StartInfo.FileName = "python";
                process.StartInfo.Arguments = "--version";
                process.StartInfo.UseShellExecute = false;
                process.StartInfo.RedirectStandardOutput = true;
                process.Start();
                string output = process.StandardOutput.ReadToEnd();
                process.WaitForExit();
                // MessageBox.Show(output);
                if (process.ExitCode == 0)
                {
                    if (output.StartsWith("Python 3.7.9"))
                    {
                        MessageBox.Show("Python 环境配置正确。", "成功", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    } else
                    {
                        MessageBox.Show("Python 环境已配置，但是版本不正确。\n目前版本：" + output + "\n预期版本：Python 3.7.9", "成功", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }
                }
                else
                {
                    MessageBox.Show("无法确定 Python 的版本，错误代码是 " + process.ExitCode.ToString() + "。", "失败", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            catch
            {
                MessageBox.Show("无法确定 Python 的版本。", "错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void checkFileExists(string absPath, string programName)
        {
            if (File.Exists(absPath))
            {
                MessageBox.Show(programName + " 环境配置正确。", "成功", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else
            {
                MessageBox.Show(programName + " 环境配置不正确。\n找不到所需的 " + absPath + " 文件。", "失败", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void stepThreeDetect_Click(object sender, EventArgs e)
        {
            checkFileExists(diskChar + @":\Program Files\PostgreSQL\13\bin\psql.exe", "PostgreSQL");
        }

        private void stepFourDetect_Click(object sender, EventArgs e)
        {
            checkFileExists(diskChar + @":\Program Files\MATLAB\MATLAB Runtime\v96\bin\win64\mclmcr.dll", "MATLAB");
        }

        private void stepFiveInstall_Click(object sender, EventArgs e)
        {
            tryExecute("./script/installdep.bat");
        }

        private void 帮助ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBox.Show("请参阅软件使用用户手册”安装“一节。", "帮助");
        }

        private void 退出ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void 更改安装盘符ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            ChangeDisk form = new ChangeDisk();
            form.ShowDialog();
            (sender as ToolStripMenuItem).Text = "更改安装盘符（" + diskChar + ":\\）为…";
        }
    }
}
