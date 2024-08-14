// example.c
#include <windows.h>

__declspec(dllexport) int add(int a, int b) {
    return a + b +10;
}