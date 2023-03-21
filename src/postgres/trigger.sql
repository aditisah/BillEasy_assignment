CREATE OR REPLACE FUNCTION update_department()
RETURNS TRIGGER AS
BEGIN
UPDATE departments SET employee_count = employee_count+1
WHERE id = NEW.dept_id
RETURN NEW
END;

CREATE OR REPLACE TRIGGER employee_trigger After INSERT
ON employees FOR EACH ROW 
EXECUTE FUNCTION update_department;