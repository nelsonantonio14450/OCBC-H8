using System;
using System.Globalization;

class String2
{

    static void Main()
    {
        string str1 = "untuk pemprogaman .net adalah #1";
        string str2 = "untuk pemprogaman .net adalah #1";
        string str3 = "string c# sangat tangguh";
        string asd, strAtas;
        int hasil, idx;

        Console.WriteLine("str1: " + str1);
        Console.WriteLine("panjang str1: " + str1.Length);

        asd = str1.ToLower(CultureInfo.CurrentCulture);//str bwh
        strAtas = str1.ToUpper(CultureInfo.CurrentCulture);
        Console.WriteLine("Versi huruf kecil dari str: \n" + asd);
        Console.WriteLine("Versi huruf atas dari str: \n" + strAtas);
        Console.WriteLine();

        Console.WriteLine("Menampilkan str1, char demi char. ");
        for (int i = 0; i < str1.Length; i++)
        {
            Console.Write(str1[i]);

        }
        Console.WriteLine("\n");

        if (str1 == str2)
        {
            Console.WriteLine("str1 == str2");
        }
        else
        {
            Console.WriteLine("str1 != str2");
        }

        if (str1 == str3)
            Console.WriteLine("str1 == str3");
        else
            Console.WriteLine("str1 != str3");

        hasil = string.Compare(str1, str3, StringComparison.CurrentCulture);
        if (hasil == 0)
            Console.WriteLine("str1 dan str3  sama");
        else if (hasil < 0)
            Console.WriteLine("str1 kurang dari str3");
        else
            Console.WriteLine("str1 lebih besar dari str3");

        Console.WriteLine();

        str2 = "Satu Dua Tiga Satu";

        idx = str2.IndexOf("Satu", StringComparison.Ordinal);
        Console.WriteLine("Indeks kemunculan pertama dari satu " + idx);

        idx = str2.LastIndexOf("Satu", StringComparison.Ordinal);
        Console.WriteLine("indeks kemunculan terakhir dari satu " + idx);

    }
}