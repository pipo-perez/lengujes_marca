#include<stdio.h>

int main() {
    int numero1 = 0, numero2 = 0, resultado;
    int opcion;

    do {
        printf("Escribe el número de operación que deseas realizar\n");
        printf("1. Suma\n");
        printf("2. Resta\n");
        printf("3. División\n");
        printf("4. Multiplicación\n");
        printf("5. Salir\n");
        scanf(" %i", &opcion);
        // Eleccion de numeros
        printf("Escribe el primer numero\n");
        scanf("%d", &numero1);
        printf("Escribe el segundo numero\n");
        scanf("%d", &numero2);

        printf("Tu opción escogida es %i\n", opcion);
    
        if (opcion == 1) {
            resultado = numero1 + numero2;
        } else if (opcion == 2) {
            resultado = numero1 - numero2;
        } else if (opcion == 3) {
            resultado = numero1 / numero2;
        } else if (opcion == 4) {
            resultado = numero1 * numero2;
        } else {
            opcion = 5;
        }
        printf("El resultado de la operación es %d\n", resultado);
} while (opcion != 5);
    // printf("El resultado de la operación es %d\n", resultado);
    // return 0;
}
