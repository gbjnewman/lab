#include <stdio.h>

int main(void) {
  int dollars;
  int twenties;
  int tens;
  int fives;
  int ones;

  printf("enter a dollar amount: ");
  scanf("%d",&dollars);

  twenties=dollars/20;
  dollars=dollars-twenties*20;
  tens=dollars/10;
  dollars=dollars-tens*10;
  fives=dollars/5;
  dollars=dollars-fives*5;
  ones=dollars/1;


  printf("$20 bills: %d\n$10 bills: %d\n$5 bills: %d\n$1 bills: %d\n", twenties, tens, fives, ones);

return 0;

}
