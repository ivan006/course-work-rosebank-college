package com.example.a3_1_1_arc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val submitButton = findViewById<Button>(R.id.submitButton)
        val numberInput = findViewById<EditText>(R.id.numberInput)

        val resultOutput = findViewById<TextView>(R.id.resultOutput)

        submitButton?.setOnClickListener {
            var output: String = ""

            output = "Welcome"
            resultOutput.text = output

        }
    }
}