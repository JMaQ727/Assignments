using System;

namespace wizard
{
    class Ninja : Human
    {
        public Ninja(string n, int s, int i, int hp) : base(n, s, i, 175, hp)
        {
        }
        public int Attack(Human target)
        {
            int dmg = dexterity * 5;
            Random rand = new Random();
            int oneShot = rand.Next(0,5);
            {
                if (oneShot == 4) 
                {
                    target.killEnemy();
                    Console.WriteLine($"A critical attack! {target.name} is dead.");
                }
                else 
                {
                    Console.WriteLine($"{this.name} attacked {target.name} for {dmg}.");
                    target.changeHealth(dmg);
                }
            }
            return dmg;
        }
        public void Steal(Human target)
        {
            target.changeHealth(5);
            this.changeHealth(-5);
            Console.WriteLine($"{this.name} stole 5 health from {target.name}, making their health {target.Health} and {this.name}'s {this.Health}.");
        }
    }
}