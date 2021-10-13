using System;

namespace pro2
{
    class Program
    {

        static void Main(string[] args)
        {
            int pil;
            bool re = false; //checker



            // int.Parse(Console.ReadLine());

            while (re == false)
            {
                Console.WriteLine("1. Pesawat \n2. datanew \n3. bilangan \n4. About me \n5. Exit : ");
                pil = int.Parse(Console.ReadLine());
                if (pil == 1)
                {
                    //nomor 1
                    Pesawat pesawat = new Pesawat();
                    pesawat_tempur pswttmpr = new pesawat_tempur();

                    pesawat.nama = "adam air";
                    pesawat.jumlahroda = 3;
                    pesawat.Ketinggian = "2500 kaki";
                    pesawat.jumlahpenumpang = "3 penumpang";
                    pswttmpr.nama = "AZ00TPU";
                    pswttmpr.jumlahroda = 5;
                    pswttmpr.Ketinggian = "200 kaki";
                    pswttmpr.jumlahpenumpang = "2 Penumpang plus kopilot dan asssistance";

                    pesawat.terbang();
                    pswttmpr.terbangtinggi();
                    pesawat.terbang();
                    pesawat.sudahterbang();

                    re = true;
                }
                else if (pil == 2)
                {
                    //nomor 2
                    data datanew = new data();
                    datanew.print("Foxy");
                    datanew.print(1123122224);
                    re = true;
                }
                else if (pil == 3)
                { //bilangan masih gbs, habis 1 jam hanya untuk ini
                    Bilangan1 bilangan = new Bilangan1();
                    Console.Write($"Masukan Bilangan 1: ");
                    int bil1 = 2;
                    Console.Write($"Masukan Bilangan 2: ");
                    int bil2 = 3;
                    bilangan.Bilangan(bil1, bil2);
                    bilangan.PenjumlahanPerkalian();
                    bilangan = new Bilangan2();
                    bilangan.Bilangan(bil1, bil2);
                    bilangan.PenjumlahanPerkalian();

                }
                else if (pil == 4)
                {
                    Console.WriteLine("c# menarik ");
                    re = true;
                }
                else
                {
                    break;
                }

                Console.WriteLine("Lagi? 1. yes || 2. no");
                string a;
                a = Console.ReadLine();
                if (a == "1")
                    re = false;
                else
                    re = true;



            }
        }

    }
}
