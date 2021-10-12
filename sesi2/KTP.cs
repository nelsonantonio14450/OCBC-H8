using System;

class Project3
{
    public static void Main(String[] args)
    {

        string nama;
        int umur;

        Console.WriteLine("Program Pendaftaran Penduduk");
        Console.WriteLine("Masukan nama: ");
        nama = Console.ReadLine();
        Console.WriteLine("Masukan alamat: ");
        var alamat = Console.ReadLine();
        Console.WriteLine("Masukan umur: ");
        umur = int.Parse(Console.ReadLine());

        Console.WriteLine();
        Console.WriteLine("Terima Kasih");
        Console.WriteLine("data berikut");
        Console.WriteLine($"Nama : {nama}");
        Console.WriteLine($"Alamat : {alamat}");
        Console.WriteLine($"Umur : {umur} tahun");
        Console.WriteLine("sudah disimpan");

    }
}