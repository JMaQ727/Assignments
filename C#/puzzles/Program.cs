using System;

namespace puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            TossCoin();
        }
        // public Array RandomArray()
        // {
        //     int[] ra = new int[10];
        //     Random rand = new Random();
        //     for (int val = 0; val < 10; val++)
        //     {
        //         ra[val] = rand.Next(5, 26);
        //     }
        // }
        public string TossCoin()
        {
            Console.WriteLine("Tossing a coin!");
            Random rand = new Random();
            int coin = rand.Next(0,2);
            if (coin == 0)
            {
                Console.WriteLine("It's heads!");
                return "Heads";
            } else {
                Console.WriteLine("It's tails!");
                return "Tails";
            }
        ;
        }
    }
}
