using System;

class Soal4
{
    public static void Main()
    {
        Console.Write("masukan angka = ");
        string a = Console.ReadLine();

        Console.Write("angka terbalik = ");
        for (int i = a.Length - 1; i >= 0; i--)
        {

            Console.Write(a[i]);
        }



    }
}