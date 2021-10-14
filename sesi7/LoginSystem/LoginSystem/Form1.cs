using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LoginSystem
{
    public partial class Form1 : Form
    {
        Config db = new Config();

        public Form1()
        {
            InitializeComponent();
            db.connect("userdata");

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            register register = new register();
            register.Show();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            db.ExecuteSelect("SELECT * FROM user_info where username='" + textBox1.Text + "' and password ='" + textBox2.Text + "'");

            if (db.Count() == 1)
            {
                MessageBox.Show("Success You Will Login as " + db.Results(0, "names"));
                FormData frm = new FormData();
                frm.Show();
                this.Hide();

            } else
            {
                MessageBox.Show("Wrong username and password combination");
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }
    }
}
