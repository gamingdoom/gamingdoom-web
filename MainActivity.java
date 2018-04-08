package com.gmail.pranaysanghai.cargame;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.Switch;
import android.widget.TextView;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        EditText num1 = (EditText) findViewById(R.id.entry1);
        EditText num2 = (EditText) findViewById(R.id.entry2);
        int number1 = Integer.parseInt(num1.getText().toString());
        int number2 = Integer.parseInt(num2.getText().toString());

        Switch addOrSub = (Switch) findViewById(R.id.switch1);
        Boolean isSwitched = addOrSub.isChecked();
        int result;
        if(isSwitched){
            result = number1 - number2;
        }
        else
            result = number1 + number2;
        TextView res = (TextView) findViewById(R.id.calc);
        res.setText(result);

    }
}
