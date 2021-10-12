using System;

public class logika1
{

    public static void Main()
    {
        int a, b;
        Console.WriteLine("Nilai Pertama : ");
        a = int.Parse(Console.ReadLine());
        Console.WriteLine("Nilai Kedua : ");
        b = int.Parse(Console.ReadLine()); ;

        if (a > b)
        {
            Console.WriteLine("nilai pertama lebih besar dari kedua");
        }
        else if (a < b)
        {
            Console.WriteLine("nilai pertama lebih kecil dari kedua");
        }
        else if (a == b)
        {
            Console.WriteLine("nilai pertama sama dengan kedua");
        }
    }
}