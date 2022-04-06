using System;

namespace cards
{
    public class Card 
    {
        public string name;
        public string suit;
        public int val;
        public Card(string s, string n, int v)
        {
            suit = s;
            name = n;
            val = v;
        }
        public void print()
        {
            Console.WriteLine($"{name} {suit} {val}");
        }
    }
}