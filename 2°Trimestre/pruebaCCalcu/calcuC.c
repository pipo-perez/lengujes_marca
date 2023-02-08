#include<stdio.h>



int main()
    int numero1 = 0, numero2 = 0, resultado;
    char opcion;
    do{
        printf("Escribe el primer numero\n");
        scanf("%i",& numero1);
        printf("Escribe el segundo numero\n");
        scanf("%i",& numero2);
        printf("Escribe el numero de operacion que decea relaizar\n");
        printf("1.Suma\n");
        printf("2.Resta\n");
        printf("3.Division\n");
        printf("4.Multiplicación\n");
        printf("5.Salir\n");
        scanf("%c", & opcion);

        printf("Tu opinion escogida es%a",opcion);

        if(opcion=='1')
            resultado = numero1+numero2;
        else
            if(opcion == '2')
                resultado = numero1+numero2;
            else
                if(opcion == '3')
                    resultado = numero1/numero2;
                else
                    if(opcion == '4')
                    resultado = numero1*numero2;
                    else

    }