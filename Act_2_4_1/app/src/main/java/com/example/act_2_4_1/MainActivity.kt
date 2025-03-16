package com.example.act_2_4_1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Switch
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val clickMeButton = findViewById<Button>(R.id.clickMeButton)

        val welcomeTextView = findViewById<TextView>(R.id.welcomeTextView)
        val nameEditText = findViewById<EditText>(R.id.nameEditText)


        val zuluSwitch = findViewById<Switch>(R.id.zuluSwitch)

        clickMeButton?.setOnClickListener {
            var greeting: String
            if (zuluSwitch.isChecked){
                greeting = "Sawubona, ${nameEditText.text}"
            } else  {
                if (nameEditText.text.toString() == "Sam"){
                    greeting = "Yo, ${nameEditText.text}"
                } else  {
                    greeting = "Welcome, ${nameEditText.text}"
                }
            }
            welcomeTextView.text = greeting
//            Toast.makeText(this@MainActivity, "Button Clicked", Toast.LENGTH_LONG).show()

        }


    }
}