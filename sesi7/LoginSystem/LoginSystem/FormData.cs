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
    public partial class FormData : Form
    {
        Config db = new Config();
        public FormData()
        {
            InitializeComponent();
            db.connect("userdata");

            textBox1.Text = Form1.nama;
            textBox2.Text = Form1.username;
        }

        private void FormData_Load(object sender, EventArgs e)
        {
            db.ExecuteSelect("SELECT * FROM data_staff");
            
           //ini cara sambung ke grid gmn

        }

        private void button1_Click(object sender, EventArgs e)
        {
            db.ExecuteSelect("SELECT * FROM data_staff where names="+textBox3.Text);

        }
    }
}
