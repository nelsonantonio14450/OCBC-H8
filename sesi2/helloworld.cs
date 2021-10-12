using System;


public class Helloworld
{
    public static void Main(String[] args)
    {
        Console.WriteLine("helloworld");
        Console.WriteLine("Hello nama kalian");
        Console.WriteLine("Selamat Datang di Program Bootcamp OCBC");
        Console.WriteLine("Tahap 1 saya akan belajar C#");

        string namacust = "fox";
        double harga1 = 10.000, harga2 = 5.000, harga3 = 20.000;
        int jumlah1 = 10, jumlah2 = 7, jumlah3 = 13;

        double total1 = harga1 * jumlah1, total2 = harga2 * jumlah2, total3 = harga3 * jumlah3;

        double totalhargaSemuaBarang = total1 + total2 + total3;
        int jumlahSemuaBarang = jumlah1 + jumlah2 + jumlah3;

        Console.WriteLine();
        Console.WriteLine("nama Customer: " + namacust);
        Console.WriteLine("barang 1 ber jumlah : " + jumlah1 + " dengan harga " + harga1 + " yang harus dibayar " + total1);
        Console.WriteLine("barang 2 ber jumlah : " + jumlah2 + " dengan harga " + harga2 + " yang harus dibayar " + total2);
        Console.WriteLine("barang 3 ber jumlah : " + jumlah3 + " dengan harga " + harga3 + " yang harus dibayar " + total3);
        Console.WriteLine();
        Console.WriteLine("jumlah semua barang: " + jumlahSemuaBarang);
        Console.WriteLine("Total harga semua barang : " + totalhargaSemuaBarang);
        Console.WriteLine();

    }
}