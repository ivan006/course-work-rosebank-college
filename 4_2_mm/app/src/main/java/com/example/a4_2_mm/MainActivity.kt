package com.example.a4_2_mm

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)



        val clickMeButton = findViewById<Button>(R.id.button)


        val welcomeTextView = findViewById<TextView>(R.id.textView)
        val nameEditText = findViewById<EditText>(R.id.editTextText)


        clickMeButton?.setOnClickListener {
            var greeting: String = ""


            greeting = "Welcome, ${nameEditText.text}"
            welcomeTextView.text = greeting




        }
    }
}