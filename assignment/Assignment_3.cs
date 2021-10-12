using System;

class Soal3
{
    public static void Main()
    {
        int a, resu = 1;
        Console.WriteLine("Input Nomor : ");
        a = int.Parse(Console.ReadLine());

        for (int i = 1; i <= a; i++)
        {
            resu = i * resu;
            Console.WriteLine(resu);
        }

        Console.WriteLine("hasil = " + resu);

    }
}