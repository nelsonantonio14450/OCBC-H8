using System;

namespace pro2
{
    class Pesawat
    {
        public string nama;
        public int jumlahroda;
        public string jumlahpenumpang;


        private string ketinggian;
        public string Ketinggian
        {
            get { return ketinggian; }
            set { ketinggian = value; }
        }

        public void terbang()
        {
            Console.WriteLine("Pesawat dengan nama {0}, sedang take off ", this.nama);
        }

        public void sudahterbang()
        {
            Console.WriteLine("Pesawat sekarang berada pada ketinggian {0},  ", this.ketinggian);
        }

    }
}
