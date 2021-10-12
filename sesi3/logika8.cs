using System;

class logika
{
    public static void Main()
    {
        int i = 0;
        int pil, byk, strt;


        Console.WriteLine("Pilihan : 1. + ; 2. - ; 3. * ; 4. / :");
        pil = int.Parse(Console.ReadLine());
        Console.WriteLine("start : ");
        strt = int.Parse(Console.ReadLine());
        // Console.WriteLine("banyaknya : ");
        // byk = int.Parse(Console.ReadLine());
        do
        {
            i++;

            if (pil == 1)
                Console.WriteLine($"{i} + {strt} = " + (i + strt));
            else if (pil == 2)
                Console.WriteLine($"{i} - {strt} = " + (i - strt));
            else if (pil == 3)
                Console.WriteLine($"{i} * {strt} = " + (i * strt));
            else if (pil == 4)
                Console.WriteLine($"{i} / {strt} = " + (i / strt));
            else
            {
                Console.WriteLine("Pilihan tidak ada");
            }

        } while (i < 10);
    }
}