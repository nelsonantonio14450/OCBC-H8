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
        }

        private void FormData_Load(object sender, EventArgs e)
        {
            db.ExecuteSelect("SELECT * FROM data_staff");
            
           

        }
    }
}
