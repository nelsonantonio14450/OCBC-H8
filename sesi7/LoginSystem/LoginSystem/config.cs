using System;
using MySql.Data.MySqlClient;
using System.Windows.Forms;
using System.Data;


namespace LoginSystem
{
    public class Config
	{

		string ConectionString = "";
		public MySqlConnection connection = null;
		public string server = "127.0.0.1";
		public string user = "root";
		public string password = "root";
		DataSet ds;
		DataTable dt;
		public string Table = "user_info";
		public string ConnectionType = "";
		string RecordSource = "";

		DataGridView tempdata;



		public Config()
		{

		}

		public void connect(string database_name)
        {
            try
            {
                ConectionString = "SERVER="+server+"; DATABASE="+database_name+"; UID="+user+"; PASSWORD="+password + ";SSL Mode=None;";
				connection = new MySqlConnection(ConectionString);

            }
            catch(Exception E)
            {
				MessageBox.Show(E.Message);
            }
        }

		public void ExecuteSql(string sql_command)
        {
			nowquiee(sql_command);
        }

        public void nowquiee(string sql_comm)
        {
            try
            {
                MySqlConnection cs = new MySqlConnection(ConectionString);
                cs.Open();
                MySqlCommand myc = new MySqlCommand(sql_comm, cs);
                myc.ExecuteNonQuery();
                cs.Close();


            }
            catch (Exception err)
            {

                MessageBox.Show(err.Message);
            }
        }

        // function to execute delete , insert and update
        public void Execute(string Sql_command)
        {
            RecordSource = Sql_command;
            ConnectionType = Table;
            dt = new DataTable(ConnectionType);
            try
            {
                string command = RecordSource.ToUpper();

                //if sql contains select
                MySqlDataAdapter da2 = new MySqlDataAdapter(RecordSource, connection);

                DataSet tempds = new DataSet();
                da2.Fill(tempds, ConnectionType);
                //da2.Fill(tempds);

                


            }
            catch (Exception err) { MessageBox.Show(err.Message); }
        }

        // function to bring selected results based on column name and row index
        public string Results(int ROW, string COLUMN_NAME)
        {
            try
            {
                return dt.Rows[ROW][COLUMN_NAME].ToString();
            }
            catch (Exception err)
            {
                MessageBox.Show(err.Message);
                return "";

            }
        }

        // function to bring selected results based on column index and row index
        public string Results(int ROW, int COLUMN_NAME)
        {
            try
            {
                return dt.Rows[ROW][COLUMN_NAME].ToString();
            }
            catch (Exception err)
            {
                MessageBox.Show(err.Message);
                return dt.Rows[ROW][COLUMN_NAME].ToString();

            }
        }

        // Execute select statement
        public void ExecuteSelect(string Sql_command)
        {
            RecordSource = Sql_command;
            ConnectionType = Table;

            dt = new DataTable(ConnectionType);
            try
            {
                string command = RecordSource.ToUpper();
                MySqlDataAdapter da = new MySqlDataAdapter(RecordSource, connection);
                ds = new DataSet();
                da.Fill(ds, ConnectionType);
                da.Fill(dt);
                tempdata = new DataGridView();
            }
            catch (Exception err)
            {
                MessageBox.Show(err.Message);
            }


        }

        // count Number of rows after select
        public int Count()
        {
            return dt.Rows.Count;
        }
    }
}
