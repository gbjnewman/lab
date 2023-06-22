#include <stdio.h>

int main(void) {

  float loan_amount;
  float int_rate;
  float month_payment;
  float remaining;

  printf("Enter amount of loan: ");
  scanf("%f", &loan_amount);
  printf("Enter interest rate: ");
  scanf("%f", &int_rate);
  printf("Enter monthly payment: ");
  scanf("%f", &month_payment);

  remaining=(loan_amount - month_payment) + (int_rate/100/12*(loan_amount - month_payment));
  loan_amount=remaining;
  printf("Balance remaining after first payment: $%.2f\n", remaining); 

  remaining=(loan_amount - month_payment) + (int_rate/100/12*(loan_amount - month_payment));
  loan_amount=remaining;
  printf("Balance remaining after second payment: $%.2f\n", remaining); 

  remaining=(loan_amount - month_payment) + (int_rate/100/12*(loan_amount - month_payment));
  loan_amount=remaining;
  printf("Balance remaining after third payment: $%.2f\n", remaining); 
return 0;

}
