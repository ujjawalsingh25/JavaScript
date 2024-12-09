#include <iostream>
using namespace std;



class A {
public:
    static int a;

    int change(int val) {
        int b;
        // if(val==5)
        // {a=val;}
        
        if(val==5){
             b=val;
        }
       
        cout<<b<<"Second->";
        return b;
    }
};
int A::a=5;

class b: public A{
    public:
    int b=4;
    void display(){
    cout<<a+b;
    }
};

int main() {
    A obj;
 
//    cout<<obj.change(5)<<endl;
//    cout<<obj.change(11);
b bo;
bo.display();
    return 0;
}
