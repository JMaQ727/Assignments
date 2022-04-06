using System;

namespace wizard
{
    class Program
    {
        static void Main(string[] args)
        {
            Human bro = new Human("bro", 4, 5, 6, 70);
            Wizard bro2 = new Wizard("brosef", 4, 4);
            Ninja bro3 = new Ninja("ayyy", 6, 1, 125);
            Samurai bro4 = new Samurai("omg", 15, 4, 7);
            bro2.Attack(bro);
            Console.WriteLine(bro.Health);
            Console.WriteLine(bro2.Health);
            bro3.Attack(bro2);
            bro4.Attack(bro2);
            bro2.Attack(bro4);
            bro4.Meditate();
            bro3.Steal(bro4);
        }
    }
}
