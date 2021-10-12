using System;

class String3
{
    static void Main()
    {
        string[] str = { "ini", "adalah", "sebuah", "test" };
        Console.WriteLine("Array asli: ");

        for (int i = 0; i < str.Length; i++)
        {
            Console.WriteLine(str[i] + " ");

        }

        Console.WriteLine("\n");

        str[1] = "merupakan";
        str[3] = "test, juga!";

        Console.WriteLine("Array termodif: ");

        for (int i = 0; i < str.Length; i++)
            Console.Write(str[i] + " ");
    }
}