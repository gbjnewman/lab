#include <stdio.h>

int main(void) {
  float sph_rad;
  float sphere_volume;

  printf("enter radius of sphere: ");
  scanf("%f", &sph_rad);

  sphere_volume=4.0f/3.0f * 3.142f * sph_rad * sph_rad * sph_rad;

  printf("the volume is %.2f\n", sphere_volume);

  return 0;
}
