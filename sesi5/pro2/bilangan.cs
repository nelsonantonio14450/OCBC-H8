using System;

public class Bilangan1
{
    public int bil1, bil2;
    public void Bilangan(int angka1, int angka2)
    {
        bil1 = angka1;
        bil2 = angka2;
    }

    public virtual void PenjumlahanPerkalian()
    {
        Console.WriteLine($"Overriding1");
        Console.WriteLine($"Hasil penjumlahan angka {this.bil1} dan angka {this.bil2} adalah {this.bil1 + this.bil2}");
        Console.WriteLine($"Hasil perkalian angka {this.bil1} dan angka {this.bil2} adalah {this.bil1 * this.bil2}");
    }
}

public class Bilangan2 : Bilangan1
{
    public override void PenjumlahanPerkalian()
    {
        Console.WriteLine($"Overriding2");
        Console.WriteLine($"Hasil pengurangan angka {this.bil1} dan angka {this.bil2} adalah {this.bil1 - this.bil2}");
        Console.WriteLine($"Hasil pembagian angka {this.bil1} dan angka {this.bil2} adalah {this.bil1 / this.bil2}");
    }
}


// using System;


// class Prog1
// {
//     public int bilangan1, bilangan2;

//     public void bilangan(int angka1, int angka2)
//     {
//         bilangan1 = angka1;
//         bilangan2 = angka2;
//     }

//     public virtual void penjumlahanperkalianall()
//     {
//         Console.WriteLine("overiding 1....");
//         Console.WriteLine("Hasil penjumlahan angka {0} dan angka {1} = {2}", bilangan1, bilangan2, bilangan1 + bilangan2);
//         Console.WriteLine("Hasil perkalian angka {0} dan angka {1} = {2}", bilangan1, bilangan2, bilangan1 * bilangan2);
//     }
// }

// class overide : Prog1 //class overide
// {

//     public override void penjumlahanperkalianall()
//     {
//         Console.WriteLine("overiding 1....");
//         Console.WriteLine("Hasil pembagian angka {0} dan angka {1} = {2}", bilangan1, bilangan2, bilangan1 / bilangan2);
//         Console.WriteLine("Hasil pengurangan angka {0} dan angka {1} = {2}", bilangan1, bilangan2, bilangan1 - bilangan2);
//     }

//     static void Main(string[] args)
//     {
//         Prog1 overiding = new Prog1();

//         overiding.bilangan(10, 5);
//         overiding.penjumlahanperkalianall();
//         overiding = new overide();
//         overiding.bilangan(20, 5);
//         overiding.penjumlahanperkalianall();

//     }
// }
