sales_w1 = [7,3,42,19,15,35,9]
sales_w2 = [12,4,26,10,7,28]
sales = []
new_day = input("How many lemonades were sold?")
sales_w2.append(int(new_day))
#sales.extend(sales_w1)
#sales.extend(sales_w2)
sales = sales_w1 + sales_w2
worst_day_prof = min(sales) * 1.5
best_day_prof = max(sales) * 1.5

print(f"Worst day profit:$ {worst_day_prof}")
print(f"Best day profit:$ {best_day_prof}")
print(f"Combined profit:$ {best_day_prof + worst_day_prof}")