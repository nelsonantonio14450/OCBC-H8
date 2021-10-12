using System;

class soal
{
    public static void Main(string[] args)
    {

        //segitiga angka
        int i, j, k, l, n;
        Console.WriteLine("Bnyknya = ");
        n = 5;
        for (i = 1; i <= n; i++)
        {
            for (j = 1; j <= n - i; j++)
            {
                Console.Write(" ");
            }
            for (k = 1; k <= i; k++)
            {
                Console.Write(((char)(k + 64)).ToString());//sama kek nomor 2, cmn to string ASCII aja
            }
            for (l = i - 1; l >= 1; l--)
            {
                Console.Write(((char)(64 + l)).ToString());
            }
            Console.Write("\n");
        }
    }
}