using System;

class Data2
{
    public static void Main()
    {
        string[] contoh = new string[4]{
            "motherboard", "Processor", "Power Supply", "Video Card"
        };


        Console.WriteLine("Menampilkan semua data dalam array");

        foreach (string contoh1 in contoh)
        {
            Console.WriteLine(contoh1);
        }

        Console.Write("Press any key to continue . . .");
    }
}