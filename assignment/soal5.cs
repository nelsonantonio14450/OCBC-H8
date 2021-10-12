using System;

class Soal5
{

    public static void Main()
    {
        string a;
        a = "1234";
        char[] ch = new char[a.Length];

        for (int i = 0; i < a.Length; i++)
        {
            ch[i] = a[i];
        }

        Console.Write("Output : ");

        foreach (char c in ch)
        {
            switch (c)
            {
                case '1':
                    {
                        Console.Write("One ");
                        break;
                    }
                case '2':
                    {
                        Console.Write("Two ");
                        break;
                    }
                case '3':
                    {
                        Console.Write("Three ");
                        break;
                    }
                case '4':
                    {
                        Console.Write("Four ");
                        break;
                    }
                case '5':
                    {
                        Console.Write("Five ");
                        break;
                    }
                case '6':
                    {
                        Console.Write("Six ");
                        break;
                    }
                case '7':
                    {
                        Console.Write("Seven ");
                        break;
                    }
                case '8':
                    {
                        Console.Write("Eight ");
                        break;
                    }
                case '9':
                    {
                        Console.Write("Nine ");
                        break;
                    }
                case '0':
                    {
                        Console.Write("Zero ");
                        break;
                    }
            }
        }
    }
}