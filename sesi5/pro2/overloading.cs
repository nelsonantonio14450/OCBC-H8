using System;

namespace pro2
{

    class data
    {//overloading
        public string nama;
        public double nomor_telp;

        public void print(string nama)
        {
            this.nama = nama;
            Console.WriteLine("namanya adalah : " + this.nama);
        }
        public void print(double nomor_telp)
        {
            this.nomor_telp = nomor_telp;
            Console.WriteLine("Nomor HP: " + this.nomor_telp);
        }
    }
}

