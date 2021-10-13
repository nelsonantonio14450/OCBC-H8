using System;

namespace pro1
{
    class Program
    {
        static void Main(string[] args)
        {
            Laptop laptop1 = new Laptop();

            Console.WriteLine("Merk : ");
            laptop1.merk = Console.ReadLine();
            Console.WriteLine("ram : ");
            laptop1.ram = int.Parse(Console.ReadLine());
            Console.WriteLine("memory : ");
            laptop1.memory = int.Parse(Console.ReadLine());

            Console.WriteLine("\n Merk Laptop adalah " + laptop1.merk);
            Console.WriteLine("Kapasitas Ram ada " + laptop1.ram);
            Console.WriteLine("Kapasitas Memory ada " + laptop1.memory);

            laptop1.Chatting();
            laptop1.Sosmed();
            laptop1.OnlineShop();


        }
    }
}
