```java
public class Employee{
  public String name = '';
  public String dept = 'general';
}

public class Manager extends Employee {
   public Employee[] reports = new Employee[0];
}

public class WorkerBee extends Employee {
   public String[] projects = new String[0];
}

public class SalesPerson extends WorkerBee {
   public String dept = "sales";
   public double quota = 100.0;
}

public class Engineer extends WorkerBee {
   public String dept = "engineering";
   public String machine = "";
}
```

```js
function Employee() {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
  WorkerBee.call(this);
  this.dept = "engineering";
  this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);
```
