// d_class03.ts
{
  //! 접근제한자(접근제어자, Access Modifiers)

  // 캡슐화
  // : 클래스의 내부 데이터를 외부에서 직접 접근하는 것을 제한
  //   , 데이터의 안정성을 보장하는 방식

  //? 1. 접근제한자의 정의
  // - 클래스의 내부 데이터를 외부에서 직접 접근하는 것을 제한하여
  //   사용자의 코드 흐름에 맞게 데이터를 처리하는 방식

  //? 2. 접근제한자의 종류(3가지)
  //% 1. public
  // : 어디서든 접근 가능(기본값 - 생략 시)
  // : 기본적으로 모든 멤버가 가지고 있는 접근 제한자
  // : 프로그램의 어느 곳에서나 접근 가능
  // : 접근 제한자가 명시되지 않은 멤버는 모두 public으로 설정

  //% 2. private
  // : 해당 클래스 내부에서만 접근 가능
  // : 클래스 외부에서 private한 멤버에 접근할 경우 오류

  //% 3. protected
  // : 해당 클래스 및 상속받은 하위 클래스에서만 접근 가능
  // : 기본적으로 하위 클래스는 상위 클래스의 멤버에 접근 가능하지만
  // : 만약 해당 멤버가 private이라면 접근 X

  //? 접근제한자 사용 목적
  // : 클래스의 내부 구현을 숨기거나, 특정 멤버의 접근을 제한할 때 사용
  // : 안정성과 유지보수성을 높이기 위함

  // Employee 클래스 정의
  class Employee {
    // 멤버 변수 정의(접근 제한자)
    public name: string; // 이름 
    private salary: number; // 급여
    protected department: string; // 부서 - 해당 클래스 | 하위 클래스에서만 접근 O

    constructor(name: string, salary: number, department: string) {
      this.name = name;
      this.salary = salary;
      this.department = department;
    }

    public displayInfo(): void {
      console.log(`이름: ${this.name} / 부서: ${this.department} / 급여: ${this.salary}`);
      console.log(`보너스: ${this.calculateBonus()}`);
    }

    private calculateBonus(): number {
      return this.salary * 0.1;
    }
  }

  // Employee 클래스 사용 예제(인스턴스화)
  let ep1 = new Employee('이승아', 50000, 'IT');
  console.log(ep1.name); // 이승아

  // console.log(ep1.salary); - Error
  // : 'salary' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.

  // console.log(ep1.department); - Error
  // : 'department' 속성은 보호된 속성이며 'Employee' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.

  ep1.displayInfo();
  // 이름: 이승아 / 부서: IT / 급여: 50000
  // 보너스: 5000

  // ep1.calculateBonus(); - Error
  // : 'calculateBonus' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.

  //? 생성자의 경우 멤버 선언 외에도 생성자의 매개변수 앞에 접근 제한자 명시 가능
  // : 해당 매개변수는 같은 이름의 속성(멤버 변수)으로 선언
  // : , 해당 매개변수의 인자는 암묵적으로 인스턴스에 할당

  class User {
    // public id: string;
    // private password: string;

    // constructor(id: string, password: string) {
    //   this.id = id;
    //   this.password = password;
    // }

    constructor(
      public id: string, 
      private password: string
    ) {}
  }

  let user1 = new User('qwe123', 'qwerty123');
  console.log(`${user1.id}`); // qwe123
  // console.log(`${user1.password}`); - Error(private 속성)

}