using System;

class joint
{
    public static void Main()
    {
        Console.Write("Enter Your Age: ");
        int age = int.Parse(Console.ReadLine());
        Console.Write("username: ");
        string username = Console.ReadLine();
        Console.Write("Password: ");
        string password = Console.ReadLine();

        bool isAdult = age > 18;
        bool isPassValid = password == "OCBC";
        bool isUsername = username == "nelson";

        if (isAdult && isPassValid && isUsername)
        {
            Console.WriteLine("Welcome To The CLub!");

            string nama, jenkel;
            int umur;
            bool statnikah;
            Console.WriteLine("Program Pendaftaran Penduduk");
            Console.WriteLine("Masukan nama: ");
            nama = Console.ReadLine();
            Console.WriteLine("Masukan alamat: ");
            var alamat = Console.ReadLine();
            Console.WriteLine("Masukan umur: ");
            umur = int.Parse(Console.ReadLine());
            Console.WriteLine("Jenis Kelamin [L/P]: ");
            jenkel = Console.ReadLine();
            Console.WriteLine("Masukan umur [True/False] : ");
            statnikah = bool.Parse(Console.ReadLine());

            Console.WriteLine();



            int pertama, kedua, ketiga, total;
            double rata;
            Console.WriteLine("==Menghitung Nilai==");
            Console.Write("Masukan Nilai Pertama : ");
            pertama = int.Parse(Console.ReadLine());
            Console.Write("Masukan Nilai Kedua : ");
            kedua = int.Parse(Console.ReadLine());
            Console.Write("Masukan Nilai ketiga : ");
            ketiga = int.Parse(Console.ReadLine());


            Console.WriteLine("==Hasil Output==");

            Console.WriteLine($"Nama : {nama}");
            Console.WriteLine($"Alamat : {alamat}");
            Console.WriteLine($"Umur : {umur} tahun");
            Console.WriteLine($"Jenis Kelamin : {jenkel}");
            Console.WriteLine($"Status Nikah : {statnikah}");

            total = pertama + kedua + ketiga;
            rata = total / 3.0;
            Console.WriteLine("Total Nilai adalah: " + total);
            Console.WriteLine("Rata-rata nilai adalah " + rata);
            Console.WriteLine();

        }
        else
        {
            Console.WriteLine("sry, try again");
        }
    }
}