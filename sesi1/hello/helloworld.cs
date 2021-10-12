using System;

public class Helloworld
{
    public static void Main(String[] args)
    {
        Console.WriteLine("Hello World");
        String fname, lname, tanggallahir, alamat;
        int umur;

        // String umr;

        Console.Write("first : ");
        fname = Console.ReadLine();

        Console.Write("last : ");
        lname = Console.ReadLine();

        Console.Write("umur : ");
        umur = int.Parse(Console.ReadLine());

        // Console.Write("tgl lahir: ");
        // tgl1 = Console.ReadLine();


        Console.Write("tanggallahir : ");
        tanggallahir = Console.ReadLine();

        Console.Write("alamat : ");
        alamat = Console.ReadLine();

        DateTime date = DateTime.ParseExact(tanggallahir, "dd/MM/yyyy", null);

        // umr = "Umur : " + Convert.ToString(umur);

        Console.WriteLine("------------------------------------");
        Console.WriteLine("fullname is: " + fname + " " + lname);
        Console.WriteLine("age : " + umur);
        Console.WriteLine("Date Birth: " + date);
        Console.WriteLine("Address: " + alamat);
    }
}