using System;

public class Logika2
{

    public static void Main()
    {
        string nama;
        Console.Write("nama: ");
        nama = Console.ReadLine();
        Console.Write("Nilai: ");
        int nilai = int.Parse(Console.ReadLine());
        string n;

        if (nilai < 60)
        {
            n = "c";
        }
        else if (nilai < 80)
        {
            n = "b";
        }
        else
        {
            n = "a";
        }

        Console.WriteLine($"nilai {nama} adalah {n}");
    }
}