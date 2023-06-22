#include <stdio.h>

int main(void){
  float money;
  float tax_added;

  printf("enter dollar and cents amount to add tax to: ");
  scanf("%f", &money);
  printf("tax added = %.2f\n", money*1.05f);

  return 0;

}
