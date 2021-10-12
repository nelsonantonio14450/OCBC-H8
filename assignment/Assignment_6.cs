using System;

class polindrom
{
    public static void Main()
    {

        string inputan = "";
        Console.WriteLine("Polindrome");
        inputan = Console.ReadLine();


        char[] ch = new char[inputan.Length];

        for (int i = 0; i < inputan.Length; i++)
        {
            ch[i] = inputan[i];
        }

        int pjg = inputan.Length;

        int ia = 0;
        //loop polindorm
        for (int i = 0; i < inputan.Length; i++)
        {
            if (ch[i] == ch[pjg - i - 1])
            {
                ia = 1;
            }
            else
            {
                ia = 0;
            }


        }

        Console.WriteLine("1 [YES] || 0 [NO] Jawabannya: " + ia);
    }
}