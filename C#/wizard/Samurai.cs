using System;

namespace wizard
{
    class Samurai : Human
    {
        public Samurai(string n, int s, int i, int d) : base(n, s, i, d, 200)
        {
        }
        public override int Attack(Human target)
        {
            int dmg = strength * 3;
            if (target.Health < 50)
            {
                target.killEnemy();
                Console.WriteLine($"{target.name} has been executed.");
            } 
            else 
            {
                Console.WriteLine($"{name} attacked {target.name} for {dmg} damage!");
                base.Attack(target);
            }
            return dmg;
        }
        public void Meditate()
        {
            if (this.Health < 200) {
                this.changeHealth((this.Health - 200));
                Console.WriteLine("Restored health to full");
            } else {
                Console.WriteLine("Health is already at or above 200");
            }
        }
    }
}