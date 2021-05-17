using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace YunnanPowerApp
{
    static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            try
            {
                string scriptPath = System.Environment.CurrentDirectory + "\\app.py";
                System.Diagnostics.Process.Start("python", scriptPath);
            }
            catch (System.ComponentModel.Win32Exception exception)
            {
                MessageBox.Show(exception.ToString(), "Python Æô¶¯Ê§°Ü");
                return;
            }
            catch (System.Exception other)
            {
                MessageBox.Show(other.ToString(), "Python Æô¶¯Ê§°Ü");
                return;
            }
            string targetUrl = "http://localhost:18000";
            try
            {
                System.Diagnostics.Process.Start("explorer", targetUrl);
            } catch (System.ComponentModel.Win32Exception exception)
            {
                MessageBox.Show(exception.ToString(), "Ç°¶ËÆô¶¯Ê§°Ü");
                return;
            } catch (System.Exception other)
            {
                MessageBox.Show(other.ToString(), "Ç°¶ËÆô¶¯Ê§°Ü");
                return;
            }
            
        }
    }
}
