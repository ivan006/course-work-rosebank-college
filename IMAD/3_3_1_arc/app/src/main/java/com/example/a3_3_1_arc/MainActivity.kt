package com.example.a3_3_1_arc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import kotlin.random.Random

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        


        val yearInput = findViewById<EditText>(R.id.numberInput)
        val checkButton = findViewById<Button>(R.id.submitButton)
        val resultText = findViewById<TextView>(R.id.resultOutput)

        checkButton.setOnClickListener {
            val year = yearInput.text.toString().toIntOrNull()

            val generation = when (year) {
                in 1901..1927 -> "Greatest Generation"
                in 1928..1945 -> "Silent Generation"
                in 1946..1964 -> "Baby Boomers"
                in 1965..1980 -> "Generation X"
                in 1981..1996 -> "Millennials"
                in 1997..2012 -> "Generation Z"
                in 2013..2025 -> "Generation Alpha"
                else -> "Unknown Generation"
            }

            resultText.text = "You belong to: $generation"
        }
    }
}