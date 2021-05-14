using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SetupTools
{
    public partial class ChangeDisk : Form
    {
        public ChangeDisk()
        {
            InitializeComponent();
        }

        private void cancelButton_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void ChangeDisk_Load(object sender, EventArgs e)
        {
            diskCharComboBox.SelectedIndex = diskCharComboBox.Items.IndexOf(Form1.diskChar);
        }

        private void okButton_Click(object sender, EventArgs e)
        {
            Form1.diskChar = diskCharComboBox.GetItemText(diskCharComboBox.SelectedItem);
            Close();
        }
    }
}
