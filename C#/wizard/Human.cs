using System;

namespace wizard
{
    class Human
    {
        public string name;
        public int strength;
        public int intelligence;
        public int dexterity;
        public int maxHealth;
        private int health;
        public int Health
        {
            get { return health; }
        }
        public Human(string n)
        {
            name = n;
            strength = 3;
            intelligence = 3;
            dexterity = 3;
            health = 100;
        }
        public Human(string n, int s, int i, int d, int hp)
        {
            name = n;
            strength = s;
            intelligence = i;
            dexterity = d;
            health = hp;
        }
        public virtual int Attack(Human target)
        {
            int dmg = strength * 3;
            target.changeHealth(dmg);
            Console.WriteLine($"{name} attacked {target.name} for {dmg} damage!");
            return target.health;
        }
        public void changeHealth(int damage)
        {
            this.health -= damage;
        }
        public void killEnemy()
        {
            this.health = 0;
        }
    }
}
