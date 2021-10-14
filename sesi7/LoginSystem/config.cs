using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mysql.Data.MySqlClient;
using System.Windows.Forms;
using System.Data;


namespace LoginSystem { 
	public class Config
	{

		string ConnectionString = "";
		public MySqlConnection connection = null;
		public string server = "127.0.0.1";
		public string user = "root";
		public string password = "root";
		DataSet ds;



		public Config()
		{

		}
	}
}
