using System;
using System.Collections.Generic;

namespace collections
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
            string[] names = new string[] {"Tim", "Martin", "Nikki", "Sara"};
            bool[] alternate = new bool[] {true, false, true, false, true, false, true, false, true, false};
            List<string> flavorList = new List<string>();
            flavorList.Add("Vanilla");
            flavorList.Add("Chocolate");
            flavorList.Add("Strawberry");
            flavorList.Add("Cookie Dough");
            flavorList.Add("Cookies'n'Cream");
            Console.WriteLine(flavorList.Count);
            Console.WriteLine(flavorList[2]);
            flavorList.RemoveAt(2);
            Console.WriteLine(flavorList.Count);
            Dictionary<string, string> combo = new Dictionary<string, string>();
            Random rand = new Random();
            combo.Add(names[0], flavorList[rand.Next(0,4)]);
            combo.Add(names[1], flavorList[rand.Next(0,4)]);
            combo.Add(names[2], flavorList[rand.Next(0,4)]);
            combo.Add(names[3], flavorList[rand.Next(0,4)]);
            foreach (KeyValuePair<string,string> entry in combo)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
        }
        
    }
}
