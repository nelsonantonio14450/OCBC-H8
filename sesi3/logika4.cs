using System;

public class Logika4
{
    public static void Main()
    {
        double nilai;
        Console.WriteL("Nilai : ");
        nilai = Convert.ToDouble(Console.ReadLine());

        if (nilai >= 85)
        {
            Console.WriteLine("nilai A");
        }
        else if (nilai >= 65)
        {
            Console.WriteLine("nilai B");
        }
        else if (nilai >= 45)
        {
            Console.WriteLine("nilai C");
        }
        else if (nilai <= 25)
        {
            Console.WriteLine("nilai D");
        }
    }
}