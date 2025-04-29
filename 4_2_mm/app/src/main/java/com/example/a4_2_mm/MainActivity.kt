package com.example.a4_2_mm

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)



        val welcomeTextView = findViewById<TextView>(R.id.textView)
        val nameEditText = findViewById<EditText>(R.id.editTextText)



        val multiplyButton = findViewById<Button>(R.id.button)
        multiplyButton.setOnClickListener {
            // create the explicit intent
            val intent = Intent(this, MultiplicationTable::class.java)
            // start the activity
            startActivity(intent)
        }
    }
}