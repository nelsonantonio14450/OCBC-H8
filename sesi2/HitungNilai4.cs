using System;

class HitungNilai4
{

    public static void Main(string[] args)
    {
        Console.Write("Enter Your Age: ");
        int age = int.Parse(Console.ReadLine());
        Console.Write("Password: ");
        string password = Console.ReadLine();

        bool isAdult = age > 18;
        bool isPassValid = password == "OCBC";

        if (isAdult && isPassValid)
        {
            Console.WriteLine("Welcome To The CLub!");

        }
        else
        {
            Console.WriteLine("sry, try again");
        }
    }

}